import ApiV1 from "./ApiV1"


/**
 * 设置统一模型
 */
export default class SetUpModel extends ApiV1{
  // 单例
  private static _instance: SetUpModel;

  private constructor() {
    super()
  }

  public static getInstance(): SetUpModel {
    if (this._instance == null) {
      this._instance = new SetUpModel();
    }
    return this._instance;
  }
  /** 
   * 示例DEMO：没有意义，测试api是否能调用通
  */
  public appCreateDict(){
    return this.createDict({  // 唯一ID
        id: "1111",
        name: "222",
        code: "33",
        public: true,
        belongId: 2,
        remark: "备注"}).then(function(resq){
        console.log("resq==>",resq);
    })
  }
}