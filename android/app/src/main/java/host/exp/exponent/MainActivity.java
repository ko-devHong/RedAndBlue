package host.exp.exponent;

import android.os.Bundle;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Environment;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Toast;

import com.facebook.react.ReactInstanceManager;
import com.gbricklibrary.WalletManager2;
import com.google.android.gms.common.api.CommonStatusCodes;
import com.google.android.gms.vision.barcode.Barcode;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import java.io.File;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;

import co.kr.smcore.gbrick.libgbx.Define;
import co.kr.smcore.gbrick.libgbx.WalletManager;
import co.kr.smcore.gbrick.libgbx.control.WalletInfo;
import co.kr.smcore.gbrick.libgbx.service.wallet.BalanceService;
import co.kr.smcore.gbrick.libgbx.service.wallet.TransferService;
import co.kr.smcore.gbrick.libgbx.service.wallet.TxItem;
import co.kr.smcore.gbrick.libgbx.service.wallet.TxListService;
import co.kr.smcore.gbrick.libgbx.util.ConvertUtil;
import co.kr.smcore.gbrick.libgbx.util.KeyStoreIO;
//import co.kr.smcore.gbrick.myapplication.Activities.GameMainActivity;
//import co.kr.smcore.gbrick.myapplication.barcode.BarcodeCaptureActivity;
//import co.kr.smcore.gbrick.myapplication.barcode.QrCodeActivity;

import com.facebook.react.ReactPackage;
import java.util.List;
import expo.core.interfaces.Package;
import host.exp.exponent.generated.DetachBuildConstants;
import host.exp.exponent.experience.DetachActivity;
import com.facebook.react.bridge.ReactApplicationContext;

public class MainActivity extends DetachActivity {

  private static final int RC_READ_FILE = 8001;
  private static final int RC_BARCODE_CAPTURE = 9002;
  private static final int RC_BARCODE_PRIVATE_KEY = 10000;

  private static final int PERMISSION_REQUEST = 10001;
  private static final int STORAGE_PERMISSION_REQUEST = 10010;

  private static final int EXPORT_ALL_WALLET = 0;
  private static final int EXPORT_CURRENT_WALLET = 1;

  WalletInfo mCurWallet = null;
  WalletManager2 mWalletMgr = null;

  Context mContext = null;

  int mExportWallet = EXPORT_CURRENT_WALLET;

  // Qr 코드로부터 읽어 온 값
  private String qrAddress = null;

  // 지갑(별)명은 지갑 생성 시 입력받는다.
  private String mWalletName = null;

  // 비밀번호는 필요할 때만 입력받고 사용 후 메모리에서 삭제한다.
  private String mPassword = null;


  @Override
  public String publishedUrl() {
    return "exp://exp.host/@taeeh/webview";
  }

  @Override
  public String developmentUrl() {
    return DetachBuildConstants.DEVELOPMENT_URL;
  }

  @Override
  public List<ReactPackage> reactPackages() {
    return ((MainApplication) getApplication()).getPackages();
  }

  @Override
  public List<Package> expoPackages() {
    return ((MainApplication) getApplication()).getExpoPackages();
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public Bundle initialProps(Bundle expBundle) {
    // Add extra initialProps here
    return expBundle;
  }

  private ReactApplicationContext mreactContext;


//  public Object test(ReactApplicationContext reactContext) {
//      this.mreactContext = reactContext;
//      return mreactContext;
//  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

//    mContext = getApplicationContext();

    /***** WalletManager 생성 *****/

    // 지갑 관리자 생성
  //  mWalletMgr = new WalletManager2(WalletManager2.mReactContext);

//    // 서비스 결과를 받는 콜백함수 등록
//    mWalletMgr.setBalanceResultCallback(mBalanceResultCallback);
//    mWalletMgr.setTransferResultCallback(mTransferResultCallback);
//    mWalletMgr.setTxListResultCallback(mTxListResultCallback);
//
//    // 지갑 생성하기
//    public void onClick(View v) {
//      // 지갑 생성
//      WalletInfo wallet = mWalletMgr.createGBXKeystore(mWalletName, mPassword);
//      // 지갑 추가하기 (생성 후 지갑 관리자에 추가)
//      mWalletMgr.addWallet(wallet);
//
//      // 테스트를 위하여 생성한 지갑을 선택한다.
//      mCurWallet = wallet;
//      mWalletMgr.setCurrentWallet(wallet);
//
//      Toast.makeText(MainActivity.this, "지갑을 생성하여 현재 지갑으로 설정했습니다.", Toast.LENGTH_SHORT).show();
//    }

  }
}
