package com.google.samples.quickstart.signin;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

import com.example.testlibrary.GooglePlayBilling;
import com.example.testlibrary.UnityActivityX;

import org.hanvic.testdemo.GoogleLoginActivity;
import org.hanvic.testdemo.GooglePlayBillingActivity;
import org.hanvic.testdemo.TestKt2;

import java.util.HashMap;

/**
 * Simple list-based Activity to redirect to one of the other Activities. The code here is
 * uninteresting, {@link SignInActivity} is a good place to start if you are curious about
 * {@code GoogleSignInApi}.
 */
public class ChooserActivity extends AppCompatActivity implements AdapterView.OnItemClickListener {

    private static final Class[] CLASSES = new Class[]{
            GoogleLoginActivity.class,
            GooglePlayBillingActivity.class,
            SignInActivity.class,
            SignInActivityWithDrive.class,
            IdTokenActivity.class,
            ServerAuthCodeActivity.class,
            RestApiActivity.class,
            FBLoginActivity.class,
            TestBilling.class,
            UnityActivityX.class,
            TestActivity.class,
            TestKt2.class
    };

    private HashMap<Class, String> DESCRIPTION_IDS = new HashMap<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
        DESCRIPTION_IDS.put(GoogleLoginActivity.class, "測試谷歌登入");
        DESCRIPTION_IDS.put(GooglePlayBillingActivity.class, "測試谷歌內購");

        setContentView(R.layout.activity_chooser);
        // Set up ListView and Adapter
        ListView listView = findViewById(R.id.list_view);

        MyArrayAdapter adapter = new MyArrayAdapter(this, android.R.layout.simple_list_item_2, CLASSES);
        adapter.setDescriptionIds(DESCRIPTION_IDS);

        listView.setAdapter(adapter);
        listView.setOnItemClickListener(this);
    }

    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        Class clicked = CLASSES[position];
        startActivity(new Intent(this, clicked));
    }

    public static class MyArrayAdapter extends ArrayAdapter<Class> {

        private Context mContext;
        private Class[] mClasses;
        private HashMap<Class, String> mDescriptionIds;

        public MyArrayAdapter(Context context, int resource, Class[] objects) {
            super(context, resource, objects);

            mContext = context;
            mClasses = objects;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            View view = convertView;

            if (convertView == null) {
                LayoutInflater inflater = (LayoutInflater) mContext.getSystemService(LAYOUT_INFLATER_SERVICE);
                view = inflater.inflate(android.R.layout.simple_list_item_2, null);
            }

            ((TextView) view.findViewById(android.R.id.text1)).setText(mClasses[position].getSimpleName());
            if(mDescriptionIds.containsKey(mClasses[position])){
                String des = mDescriptionIds.get(mClasses[position]);
                ((TextView) view.findViewById(android.R.id.text2)).setText(des);
            }
            return view;
        }

        public void setDescriptionIds(HashMap<Class, String> descriptionIds) {
            mDescriptionIds = descriptionIds;
        }
    }
}
