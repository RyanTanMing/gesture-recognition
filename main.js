//https://teachablemachine.withgoogle.com/models/5982kyV5A1/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,

})
camera=document.getElementById('camera')
Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>'
    })
}
console.log("ml5 version ",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5982kyV5A1/model.json',model_loaded)
function model_loaded(){
    console.log("model loaded")
    speak()
}
function speak() {
    s=window.speechSynthesis
    data1="The first prediction is"
    data2="The second prediction is"
    utter=new SpeechSynthesisUtterance(data1 + data2)
    s.speak(utter)
}