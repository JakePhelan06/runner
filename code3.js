gdjs.lose_32screenCode = {};
gdjs.lose_32screenCode.GDNewTextObjects1= [];
gdjs.lose_32screenCode.GDNewTextObjects2= [];
gdjs.lose_32screenCode.GDNewSpriteObjects1= [];
gdjs.lose_32screenCode.GDNewSpriteObjects2= [];
gdjs.lose_32screenCode.GDNewSprite2Objects1= [];
gdjs.lose_32screenCode.GDNewSprite2Objects2= [];
gdjs.lose_32screenCode.GDNewSprite3Objects1= [];
gdjs.lose_32screenCode.GDNewSprite3Objects2= [];
gdjs.lose_32screenCode.GDNewSprite4Objects1= [];
gdjs.lose_32screenCode.GDNewSprite4Objects2= [];
gdjs.lose_32screenCode.GDNewSprite5Objects1= [];
gdjs.lose_32screenCode.GDNewSprite5Objects2= [];

gdjs.lose_32screenCode.conditionTrue_0 = {val:false};
gdjs.lose_32screenCode.condition0IsTrue_0 = {val:false};
gdjs.lose_32screenCode.condition1IsTrue_0 = {val:false};


gdjs.lose_32screenCode.eventsList0 = function(runtimeScene) {

{


{
}

}


{


gdjs.lose_32screenCode.condition0IsTrue_0.val = false;
{
gdjs.lose_32screenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.lose_32screenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ingame", false);
}}

}


};

gdjs.lose_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.lose_32screenCode.GDNewTextObjects1.length = 0;
gdjs.lose_32screenCode.GDNewTextObjects2.length = 0;
gdjs.lose_32screenCode.GDNewSpriteObjects1.length = 0;
gdjs.lose_32screenCode.GDNewSpriteObjects2.length = 0;
gdjs.lose_32screenCode.GDNewSprite2Objects1.length = 0;
gdjs.lose_32screenCode.GDNewSprite2Objects2.length = 0;
gdjs.lose_32screenCode.GDNewSprite3Objects1.length = 0;
gdjs.lose_32screenCode.GDNewSprite3Objects2.length = 0;
gdjs.lose_32screenCode.GDNewSprite4Objects1.length = 0;
gdjs.lose_32screenCode.GDNewSprite4Objects2.length = 0;
gdjs.lose_32screenCode.GDNewSprite5Objects1.length = 0;
gdjs.lose_32screenCode.GDNewSprite5Objects2.length = 0;

gdjs.lose_32screenCode.eventsList0(runtimeScene);
return;

}

gdjs['lose_32screenCode'] = gdjs.lose_32screenCode;
