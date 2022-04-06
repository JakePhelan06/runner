gdjs.openingCode = {};
gdjs.openingCode.GDNewTextObjects1= [];
gdjs.openingCode.GDNewTextObjects2= [];
gdjs.openingCode.GDNewTiledSpriteObjects1= [];
gdjs.openingCode.GDNewTiledSpriteObjects2= [];
gdjs.openingCode.GDNewSpriteObjects1= [];
gdjs.openingCode.GDNewSpriteObjects2= [];

gdjs.openingCode.conditionTrue_0 = {val:false};
gdjs.openingCode.condition0IsTrue_0 = {val:false};
gdjs.openingCode.condition1IsTrue_0 = {val:false};


gdjs.openingCode.mapOfGDgdjs_46openingCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.openingCode.GDNewSpriteObjects1});gdjs.openingCode.eventsList0 = function(runtimeScene) {

{


gdjs.openingCode.condition0IsTrue_0.val = false;
{
gdjs.openingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.openingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ingame", false);
}}

}


};gdjs.openingCode.mapOfGDgdjs_46openingCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.openingCode.GDNewSpriteObjects1});gdjs.openingCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.openingCode.GDNewSpriteObjects1);

gdjs.openingCode.condition0IsTrue_0.val = false;
{
gdjs.openingCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.openingCode.mapOfGDgdjs_46openingCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.openingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.openingCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.openingCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.openingCode.GDNewSpriteObjects1[i].setScale(1.1);
}
}
{ //Subevents
gdjs.openingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.openingCode.GDNewSpriteObjects1);

gdjs.openingCode.condition0IsTrue_0.val = false;
{
gdjs.openingCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.openingCode.mapOfGDgdjs_46openingCode_46GDNewSpriteObjects1Objects, runtimeScene, true, true);
}if (gdjs.openingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.openingCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.openingCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.openingCode.GDNewSpriteObjects1[i].setScale(1);
}
}}

}


{


{
}

}


{


{
}

}


};

gdjs.openingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.openingCode.GDNewTextObjects1.length = 0;
gdjs.openingCode.GDNewTextObjects2.length = 0;
gdjs.openingCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.openingCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.openingCode.GDNewSpriteObjects1.length = 0;
gdjs.openingCode.GDNewSpriteObjects2.length = 0;

gdjs.openingCode.eventsList1(runtimeScene);
return;

}

gdjs['openingCode'] = gdjs.openingCode;
