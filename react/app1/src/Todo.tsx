import { Subject, combineLatest, merge } from "rxjs";
import { bind, shareLatest, Subscribe } from "@react-rxjs/core";
import { collectValues, mergeWithKey, split } from "@react-rxjs/utils";
import { map, takeWhile, scan, startWith } from "rxjs/operators";
import * as React from "react";

// https://stackoverflow.com/questions/46235798/relative-path-in-index-html-after-build
// https://stackoverflow.com/questions/49218765/typescript-and-iterator-type-iterableiteratort-is-not-an-array-type

const newTodo$ = new Subject<string>();
export const onNewTodo = (text: string) => text && newTodo$.next(text);

const editTodo$ = new Subject<{ id: number; text: string }>();
export const onEditTodo = (id: number, text: string) =>
  editTodo$.next({ id, text });

const toggleTodo$ = new Subject<number>();
export const onToggleTodo = (id: number) => toggleTodo$.next(id);

const deleteTodo$ = new Subject<number>();
export const onDeleteTodo = (id: number) => deleteTodo$.next(id);

const todoActions$ = mergeWithKey({
  add: newTodo$.pipe(map((text, id) => ({ id: id, text }))),
  edit: editTodo$,
  toggle: toggleTodo$.pipe(map((id) => ({ id }))),
  delete: deleteTodo$.pipe(map((id) => ({ id })))
});

type Todo = { id: number; text: string; done: boolean };
const todosMap$ = todoActions$.pipe(
  split(
    (event) => event.payload.id,
    (event$, id) =>
      event$.pipe(
        takeWhile((event) => event.type !== "delete"),
        scan(
          (state, action) => {
            switch (action.type) {
              case "add":
              case "edit":
                return { ...state, text: action.payload.text };
              case "toggle":
                return { ...state, done: !state.done };
              default:
                return state;
            }
          },
          { id, text: "", done: false } as Todo
        )
      )
  ),
  collectValues()
);

const todosList$ = todosMap$.pipe(
  map((todosMap) => [...todosMap.values()]),
  shareLatest() // We are using shareLatest because the stats will also consume it
);

export enum FilterType {
  All = "all",
  Done = "done",
  Pending = "pending"
}
const selectedFilter$ = new Subject<FilterType>();
export const onSelectFilter = (type: FilterType) => {
  selectedFilter$.next(type);
};
const [useCurrentFilter, currentFilter$] = bind(
  selectedFilter$.pipe(startWith(FilterType.All))
);

const [useTodos, todos$] = bind(
  combineLatest(todosList$, currentFilter$).pipe(
    map(([todos, currentFilter]) => {
      if (currentFilter === FilterType.All) {
        return todos;
      }

      const isDone = currentFilter === FilterType.Done;
      return todos.filter((todo) => todo.done === isDone);
    })
  )
);

function TodoListFilters() {
  const filter = useCurrentFilter();

  const updateFilter = ({ target }: any) => {
    onSelectFilter(target.value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={FilterType.All}>All</option>
        <option value={FilterType.Done}>Completed</option>
        <option value={FilterType.Pending}>Uncompleted</option>
      </select>
    </>
  );
}

const [useTodosStats, stats$] = bind(
  todosList$.pipe(
    map((todosList) => {
      const nTotal = todosList.length;
      const nCompleted = todosList.filter((item) => item.done).length;
      const nUncompleted = nTotal - nCompleted;
      const percentCompleted =
        nTotal === 0 ? 0 : Math.round((nCompleted / nTotal) * 100);

      return {
        nTotal,
        nCompleted,
        nUncompleted,
        percentCompleted
      };
    })
  ),
  { nTotal: 0, nCompleted: 0, nUncompleted: 0, percentCompleted: 0 }
);

function TodoListStats() {
  const {
    nTotal,
    nCompleted,
    nUncompleted,
    percentCompleted
  } = useTodosStats();

  return (
    <ul>
      <li>Total itemsXXX: {nTotal}</li>
      <li>Items completed: {nCompleted}</li>
      <li>Items not completed: {nUncompleted}</li>
      <li>Percent completed: {percentCompleted}</li>
    </ul>
  );
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = React.useState("");

  const addItem = () => {
    onNewTodo(inputValue);
    setInputValue("");
  };

  const onChange = ({ target }: any) => {
    setInputValue(target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

const TodoItem: React.FC<{ item: Todo }> = ({ item }) => (
  <div>
    <input
      type="text"
      value={item.text}
      onChange={({ target }) => {
        onEditTodo(item.id, target.value);
      }}
    />
    <input
      type="checkbox"
      checked={item.done}
      onChange={() => {
        onToggleTodo(item.id);
      }}
    />
    <button
      onClick={() => {
        onDeleteTodo(item.id);
      }}
    >
      X
    </button>
  </div>
);

function TodoList() {
  const todoList = useTodos();

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

const provider$ = merge(todos$, stats$);
export default function App() {
  return (
    <Subscribe source$={provider$}>
      <TodoList />
    </Subscribe>
  );
}
