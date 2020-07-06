           if((navigator.userAgent.indexOf("iPhone")  != -1 )) 
           {
               alert('iPhone devices are not supported');
           
           }
           else if(navigator.userAgent.indexOf("iPad") != -1 )
           {
               alert('iPad devices are not supported');
           }
           else if(navigator.userAgent.indexOf("Macintosh") != -1 )
           {
               alert('Safari browser is not supported.');
           }
           




          const audioCtx = new(window.AudioContext || window.webkitAudioContext);
          var oscillator = audioCtx.createOscillator();
          
          var panner = audioCtx.createStereoPanner();
          var gainNode = audioCtx.createGain();
          
          oscillator.frequency.value = document.getElementById('Frequency_Input').value;

  
          var Frequency_Value = oscillator.frequency.value;
          document.getElementById('Frequency_Slider').value = Frequency_Value;
          document.getElementById('Frequency_Input').value = Frequency_Value;
  
          var slider = document.getElementById("Frequency_Slider"); 
          var output = document.getElementById("Frequency_Input");
          output.value = slider.value; 


  
          function FrequencySlider(x) {
               output.value = x.value;
               oscillator.frequency.value = x.value;
          
           }

          
          function SetFrequencySlider(x) {
               slider.value = x.value;
               return oscillator.frequency.value = x.value;
          
           }
          

          function Play_Button() { 
              
              panner.pan.value =  document.querySelector(".panning-control").value ;  
              oscillator.frequency.value = document.getElementById("Frequency_Input").value ;  
              oscillator.type = document.querySelector('input[type=radio][name=waveformRadioButton]:checked').value; 
              gainNode.gain.value = document.querySelector('.volume-control').value;

              oscillator.connect(panner);
              panner.connect(gainNode);
              gainNode.connect(audioCtx.destination);
              
              oscillator.start();
              
             
          }
          
  
          function Stop_Button() {
  
              oscillator.stop();
              return oscillator = audioCtx.createOscillator();
          }
  

          var panControl = document.querySelector('.panning-control');
          var panValue = document.querySelector('.panning-value');

  
          panControl.oninput = function () {
              panner.pan.value = panControl.value;
              panValue.innerHTML = panControl.value;
              return panner.pan.value;
          }
  

          var volControl = document.querySelector('.volume-control');
          var volValue = document.querySelector('.volume-value');
  
          volControl.oninput = function () {
              volValue.value = volControl.value;
              volValue.innerHTML = parseInt( ( parseFloat(volControl.value) * 100 ) ) + "%";
              return  gainNode.gain.value  = volControl.value; 
          }
          

          var freqControl = document.querySelector('.frequency-control');
          var freqValue = document.querySelector('.frequency-value');
  
          freqControl.oninput = function () {
              oscillator.frequency.value = freqControl.value;
              freqValue.innerHTML = freqControl.value;
              return freqControl.value;
          }
  
  
          function LeftSpeaker() {
            panControl.value = -1;
            panner.pan.value = panControl.value;
            panValue.innerHTML = panControl.value;
                    return panner.pan.value;
    
        }
  

        function RightSpeaker() {
            panControl.value = 1;
            panner.pan.value = panControl.value;
            panValue.innerHTML = panControl.value;
                    return panner.pan.value;
    
        }
  

        function CenterAudio() {
            panControl.value = 0;
            panner.pan.value = panControl.value;
            panValue.innerHTML = panControl.value;
                    return panner.pan.value;
    
        }
  
  
        function ChangeWaveformType(waveformRadioButton) {
            
            oscillator.type = waveformRadioButton.value;
            return oscillator.type ;
        
        }
  

        function SwapDivs(app,info)
            {
            d1 = document.getElementById(app);
            d2 = document.getElementById(info);
            if( d2.style.display == "none" )
            {
                d1.style.display = "none";
                d2.style.display = "block";
            }
            else
            {
                d1.style.display = "block";
                d2.style.display = "none";
            }
            }
  
