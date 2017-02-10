/**
 * Created by Administrator on 2017-01-06.
 */
module gameScene {
    import Common = GameUilt.Common;
    export class GameSelect extends eui.Component {
        public constructor (){
            super();
            this.init();
        }
        private init(): void {
            this.skinName = skin.gameMenu;
            this.setTextColor();
            this.addEventListener('complete', function(){
                this.loop.play();
            }, this);
            this.start.play();
            this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){
                LayoutUI.interval.Run(new gameScene.StartGame());
            }, this);
            this.achieve.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){
                LayoutUI.interval.Run(new gameScene.Achieve());
            }, this);
            this.levelBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                LayoutUI.interval.Run(LoadingUI.ins);
                GameUilt.Score.ins.setLevel(1);
                //加载卡牌资源组
                LoadingUI.ins.loadResGroup("cards", function(){
                    LayoutUI.interval.Run(new gameScene.Play());
                });
            }, this)
        }
        private setTextColor(): void {
            this.spareMonoy.textColor = Common.color;
            this.spareMonoy.text = String(GameUilt.Score.ins.getMonoy());
            this.currentMonoy.textColor = Common.color;
            this.currentMonoy.text = String(GameUilt.Score.ins.getMonoy(true));
            for(let i = 0; i < 5; i++){
                let map = eval('this.text' + i);
                map.textColor = Common.color;
            }
        }

        private start: egret.tween.TweenGroup;
        private loop: egret.tween.TweenGroup;
        private homeBtn: eui.Button;
        private achieve: eui.Button;
        /**
         * 购买和等级购买的按钮
         */
        private levelBtn0: eui.Button;
        private levelBtn1: eui.Button;
        private levelBtn2: eui.Button;
        private levelBtn3: eui.Button;
        private levelBtn4: eui.Button;
        /**
         * 列表文本提示
         */
        private text0: eui.Label;
        private text1: eui.Label;
        private text2: eui.Label;
        private text3: eui.Label;
        private text4: eui.Label;
        private spareMonoy: eui.Label;//备用金币
        private currentMonoy: eui.Label;//当前金币
    }
}