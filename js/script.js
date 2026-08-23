/* Mac browsers bring back support so this block is commented now. 

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
           
*/



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
          

          var freqControl = document.querySelector('.slider-control');
          var freqValue = document.querySelector('#Frequency_Input');
  
          freqControl.oninput = function () {
              oscillator.frequency.value = freqControl.value;
              freqValue.value = freqControl.value;
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
  

        function syncPanelHeight(app, info)
            {
            var source = document.getElementById(app);
            var target = document.getElementById(info);
            var display = source.style.display;
            var visibility = source.style.visibility;
            if( source.offsetHeight == 0 )
            {
                source.style.visibility = "hidden";
                source.style.display = "block";
            }
            if( source.offsetHeight > 0 )
            {
                target.style.height = source.offsetHeight + "px";
            }
            source.style.display = display;
            source.style.visibility = visibility;
            }

        function SwapDivs(app,info)
            {
            d1 = document.getElementById(app);
            d2 = document.getElementById(info);
            window.onresize = function() {
                syncPanelHeight(app, info);
            };
            if( d2.style.display == "none" )
            {
                syncPanelHeight(app, info);
                d2.style.paddingTop = getComputedStyle(d1).paddingTop;
                d1.style.display = "none";
                d2.style.display = "block";
            }
            else
            {
                d1.style.display = "block";
                d2.style.display = "none";
            }
            document.querySelectorAll('.info-toggle').forEach(function(toggle) {
                toggle.checked = d2.style.display !== "none";
            });
            }

        function ToggleInfo(control)
            {
            SwapDivs('app','info');
            }

            window.addEventListener("resize", function() {
                syncPanelHeight("app", "info");
            });
  
