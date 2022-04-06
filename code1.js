gdjs.ingameCode = {};
gdjs.ingameCode.GDmonsterObjects1= [];
gdjs.ingameCode.GDmonsterObjects2= [];
gdjs.ingameCode.GDNewTiledSpriteObjects1= [];
gdjs.ingameCode.GDNewTiledSpriteObjects2= [];
gdjs.ingameCode.GDNewSpriteObjects1= [];
gdjs.ingameCode.GDNewSpriteObjects2= [];
gdjs.ingameCode.GDNewSprite2Objects1= [];
gdjs.ingameCode.GDNewSprite2Objects2= [];
gdjs.ingameCode.GDNewSprite3Objects1= [];
gdjs.ingameCode.GDNewSprite3Objects2= [];

gdjs.ingameCode.conditionTrue_0 = {val:false};
gdjs.ingameCode.condition0IsTrue_0 = {val:false};
gdjs.ingameCode.condition1IsTrue_0 = {val:false};


gdjs.ingameCode.mapOfGDgdjs_46ingameCode_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.ingameCode.GDNewSprite3Objects1});gdjs.ingameCode.mapOfGDgdjs_46ingameCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.ingameCode.GDNewSprite2Objects1});gdjs.ingameCode.mapOfGDgdjs_46ingameCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.ingameCode.GDNewSprite2Objects1});gdjs.ingameCode.mapOfGDgdjs_46ingameCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.ingameCode.GDNewSpriteObjects1});gdjs.ingameCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ingameCode.GDNewSprite2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.ingameCode.GDNewSprite2Objects1.length !== 0 ? gdjs.ingameCode.GDNewSprite2Objects1[0] : null), true, "", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ingameCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.ingameCode.GDNewSprite3Objects1);

gdjs.ingameCode.condition0IsTrue_0.val = false;
{
gdjs.ingameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ingameCode.mapOfGDgdjs_46ingameCode_46GDNewSprite3Objects1Objects, gdjs.ingameCode.mapOfGDgdjs_46ingameCode_46GDNewSprite2Objects1Objects, false, runtimeScene, false);
}if (gdjs.ingameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "lose screen", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.ingameCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.ingameCode.GDNewSprite2Objects1);

gdjs.ingameCode.condition0IsTrue_0.val = false;
{
gdjs.ingameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ingameCode.mapOfGDgdjs_46ingameCode_46GDNewSprite2Objects1Objects, gdjs.ingameCode.mapOfGDgdjs_46ingameCode_46GDNewSpriteObjects1Objects, false, runtimeScene, false);
}if (gdjs.ingameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "win screen", false);
}}

}


};

gdjs.ingameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ingameCode.GDmonsterObjects1.length = 0;
gdjs.ingameCode.GDmonsterObjects2.length = 0;
gdjs.ingameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.ingameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.ingameCode.GDNewSpriteObjects1.length = 0;
gdjs.ingameCode.GDNewSpriteObjects2.length = 0;
gdjs.ingameCode.GDNewSprite2Objects1.length = 0;
gdjs.ingameCode.GDNewSprite2Objects2.length = 0;
gdjs.ingameCode.GDNewSprite3Objects1.length = 0;
gdjs.ingameCode.GDNewSprite3Objects2.length = 0;

gdjs.ingameCode.eventsList0(runtimeScene);
return;

}

gdjs['ingameCode'] = gdjs.ingameCode;
