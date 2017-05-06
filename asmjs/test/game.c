#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <emscripten.h>
#include "cJSON.h"

// js interop
void onInit();
void onUpdate(float t);
void onDestroy();
char *gameData();

// utils
void callJs(char *msg){
	emscripten_run_script(msg);
}

// game logic
typedef struct {
	int id;
	int x, y;
} Enemy, Player;

typedef struct {
	Player player;
	Enemy *enemies;
	int enemyCount;
} App;

void loadApp(App *app, int enemyCount){
	memset(app, 0, sizeof(App));
	app->enemies = (Enemy*)malloc(sizeof(Enemy)*enemyCount);
	app->enemyCount = enemyCount;
	
	for(int i=0; i<enemyCount; ++i){
		Enemy *enemy = app->enemies + i;
		memset(enemy, 0, sizeof(Enemy));
		enemy->id = i;
	}
}

void unloadApp(App *app){
	free(app->enemies);
}

void updateApp(App *app, float t){
	for(int i=0; i<app->enemyCount; ++i){
		Enemy *enemy = app->enemies + i;
		enemy->y += 1;
	}
}

// binding
App _app;

void onInit(){
	loadApp(&_app, 5);
	// 只有在html的環境中有效果!
	callJs("onInitOK()");
}

void onUpdate(float t){
	updateApp(&_app, t);
}

void onDestroy(){
	unloadApp(&_app);
}

char *gameData(){
	int enemyCount = _app.enemyCount;
	
	cJSON *playerJson = cJSON_CreateArray();
	cJSON_AddNumberToObject (playerJson, "id", _app.player.id);
	cJSON_AddNumberToObject (playerJson, "x", _app.player.x);
	cJSON_AddNumberToObject (playerJson, "y", _app.player.y);
	
	cJSON *enemiesArray = cJSON_CreateArray();
	for(int i=0; i<enemyCount; ++i){
		cJSON *enemyJson = cJSON_CreateObject();
		Enemy *enemy = _app.enemies + i;
		cJSON_AddNumberToObject (enemyJson, "id", enemy->id);
		cJSON_AddNumberToObject (enemyJson, "x", enemy->x);
		cJSON_AddNumberToObject (enemyJson, "y", enemy->y);
		cJSON_AddItemToArray(enemiesArray, enemyJson);
	}
	
	cJSON *root = cJSON_CreateObject();
	cJSON_AddItemToObject(root, "player", playerJson);
	cJSON_AddItemToObject(root, "enemies", enemiesArray);
	
	char *jsonstr = cJSON_Print(root);
	cJSON_Delete(root);
	return jsonstr;
}

