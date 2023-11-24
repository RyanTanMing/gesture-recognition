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
}
prediction1=""
prediction2=''
function speak() {
    s=window.speechSynthesis
    data1="The first prediction is " + prediction1
    data2="The second prediction is " + prediction2
    utter=new SpeechSynthesisUtterance(data1 + data2)
    s.speak(utter)
}
function check() {
    img=document.getElementById('capture_image')
    classifier.classify(img, gotresult)
}
function gotresult(error,results) {
    if (error) {
        console.error(error)
    }
    else {console.log(results)
    document.getElementById('result_emotion').innerHTML=results[0].label
    document.getElementById('result_emotion2').innerHTML=results[1].label
    prediction1=results[0].label
prediction2=results[1].label
speak()
if (results[0].label=="ok") {
    document.getElementById("result_emoji").innerHTML="👌"
} 
if (results[0].label=="rock") {
    document.getElementById("result_emoji").innerHTML="✊"
} 
if (results[0].label=="scissors") {
    document.getElementById("result_emoji").innerHTML="✌️"
} 
if (results[0].label=="vicory") {
    document.getElementById("result_emoji").innerHTML="✌️"
} 
if (results[0].label=="best") {
    document.getElementById("result_emoji").innerHTML="👍"
}
if (results[0].label=="amazing") {
    document.getElementById("result_emoji").innerHTML="👌"
}
if (results[1].label=="ok") {
    document.getElementById("result_emoji2").innerHTML="👌"
} 
if (results[1].label=="rock") {
    document.getElementById("result_emoji2").innerHTML="✊"
} 
if (results[1].label=="scissors") {
    document.getElementById("result_emoji2").innerHTML="✌️"
} 
if (results[1].label=="vicory") {
    document.getElementById("result_emoji2").innerHTML="✌️"
} 
if (results[1].label=="best") {
    document.getElementById("result_emoji2").innerHTML="👍"
}
if (results[1].label=="amazing") {
    document.getElementById("result_emoji2").innerHTML="👌"
}
    }
}