import { _decorator, Component, Label, UIOpacity } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CandidateRole")
export default class CandidateRole extends Component {
  @property(Label)
  label: Label | null = null;
  public mDistance: number = 0; //到椭圆最低点的距离
  public mPositionIndex: number; //节点在链表中的序号
  public mNextPositionX: number;
  public mNextPositionY: number;
  public mColorR: number;
  public mColorG: number;
  public mColorB: number;
  public mbIsSelected: boolean; // 是否被选中
  public mpNextRole: CandidateRole; //节点右面角色的指针
  public mpForeRole: CandidateRole; //..左..........
  init() {
    this.mPositionIndex = 0;
    this.mbIsSelected = false;
    this.mDistance = 0;
    this.mColorB = 255;
    this.mColorG = 255;
    this.mColorR = 255;
  }
  onLoad() {
    this.init();
  }
  setPositionIndex(index: number) {
    this.mPositionIndex = index;
  }
  getPositionIndex() {
    return this.mPositionIndex;
  }
  setScale(scale: number) {
    this.node.setScale(scale, scale, 1);
  }
  setZOrder(zIndex: number) {
    this.node.setSiblingIndex(zIndex - 1);
  }
  setPositionX(x: number) {
    this.node.setPosition(x, 0, 0);
  }
  getPositionX() {
    return this.node.getPosition().x;
  }
  setPositionY(y: number) {
    this.node.setPosition(0, y, 0);
  }
  getPositionY() {
    return this.node.getPosition().y;
  }
  getScale() {
    return this.node.scale;
  }
  setColor(r: number, g: number, b: number) {
    // if (r && g && b) this.node.color = cc.color(r, g, b);
  }
  setOpacity(opacity: number) {
    if (opacity) this.node.getComponent(UIOpacity).opacity = opacity;
  }
  setString(str: string) {
    this.label.string = str;
  }
}
