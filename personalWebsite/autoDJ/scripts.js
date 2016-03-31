var surf1 = undefined;
var initialized1=false;
var initialized2=false;
var w1showing = false;
var w2showing = false;
var divider = undefined;


var initialize = function(){
    w1showing = !w1showing;
    

    if(!initialized1){
        divider = document.getElementById("divider");
        console.log('trying')
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: "#3F79FF",
            progressColor: 'purple'
        });

        var path = './audio/' + "demo1" + '.mp3'
        wavesurfer.load(path);



        surf1 = wavesurfer;
        document.getElementById("demo1play").style.visibility = "visible";
        document.getElementById("demo1header").style.visibility = "visible";
        initialized1=true;
    }
    checkBoth();
	
    return true;
};

var surf2 = undefined;

var initialize2 = function(){
    w2showing = !w2showing;

    if(!initialized2){
        divider = document.getElementById("divider");
        initialized2=true;
        console.log('trying 2')
        var wavesurfer = WaveSurfer.create({
            container: '#surf',
            waveColor: "#3F79FF",
            progressColor: 'purple'
        });

        var path = './audio/' + "demo2" + '.mp3'
        wavesurfer.load(path);

        surf2 = wavesurfer;

        document.getElementById("demo2play").style.visibility = "visible";
        document.getElementById("demo2header").style.visibility = "visible";
    }
    checkBoth();
    return true;
};

var playing1 = false;
var playing2 = false;



var play1 = function(){
	surf1.playPause();
	playing1 = !playing1;
	el = document.getElementById("demo1play");
	if(playing1){
		el.innerHTML = '<i class="glyphicon glyphicon-pause"></i> Pause';
	}else{
		el.innerHTML = '<i class="glyphicon glyphicon-play"></i> Play';
	}
	
}

var play2 = function(){
	surf2.playPause();
	playing2 = !playing2;
	el = document.getElementById("demo2play");
	if(playing2){
		el.innerHTML = '<i class="glyphicon glyphicon-pause"></i> Pause';
	}else{
		el.innerHTML = '<i class="glyphicon glyphicon-play"></i> Play';
	}
	
}

var checkBoth = function(){
    if(w1showing && w2showing){
        console.log("should be adding")
        divider.innerHTML = '<hr>';
    }else{
        divider.innerHTML = '';
        console.log("should be removing")
    }
}

