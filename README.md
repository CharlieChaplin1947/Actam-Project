# Start the application

1)Download the files "main_menu.html","newMusicIntervals","SungSolfeggio.html" in the same folder.

2)Open "main_menu.html" on your browser.

3)Enjoy!

Alternatively you can open "newMusicIntervals.html" or "SungSolfeggio.html" individually to access the
corresponding functionality.


# Actam-Project

The following project has the purpose of helping music students exercising their ear to music intervals.
In order to do so, two main functionalities are developed:

------------------------------------MUSIC INTERVALS---------------------------------------------------------------|
														  |
1)MusicIntervals has the purpose of letting the listener exercising in recognizing the notes that are played      
externally. In order to do so, the program first plays a known note and an unknown note sequentially and          
the listener has to click on the button associated to the note he thinks is corresponding to the second of the    
said notes.                                                                                                       
                                                                                                                  
MusicIntervals lets the listener repeat the interval as many times as he wants and keeps track of the number      
of consecutive intervals that are recognized. However, if the listener makes a mistake once, the score is         
resetted and he must start from the beginning.                                                                    
MusicIntervals implements three difficulties:                                                                     
                                                                                                                  
	-easy:only in the central octave of a piano and only on white keyboards. The starting note is always A.   
                                                                                                                  
	-medium:only in the central octave of a piano. The starting note is displayed.                            
                                                                                                                  
	-hard:more octaves on a piano. The starting note is displayed. The listener has also to select an octave. 
                                                                                                                  
In all difficulties, except the specified exceptions, the music intervals are randomly generated.                 
                                                                                                                  
                                                                                                                  
-------------------------------------SUNG SOLFEGGIO---------------------------------------------------------------
                                                                                                                  
2)SungSolfeggioHelper has the purpose of letting the listener exercising in sung solfeggios by following          
a generated one.                                                                                                  
                                                                                                                  
The functionality randomly generates a Solfeggio in C major (more tonalities could come in the future) and        
displays it note by note on a pentagram, in a sol key. The student has to sing the note that is currently         
displayed on the pentagram, and the program will automatically inform if he must sing higher or lower             
(in pitch terms).                                                                                                 
                                                                                                                  
The solfeggio is made of eight randomly generated notes and gives the possibilities to repeat the solfeggio       
from the start or generate a brand new one.                                                                       
                                                                                                                  
------------------------------------------------------------------------------------------------------------------

NOTE:SungSolfeggio is based on the microphone of your PC, remember to enable it at the start of the SungSolfeggio.
NOTE:SungSolfeggio may not be extremely accurate, some tollerance in the sung frequency is adopted since singing
an exact sinusoid is not possible by human standards, and the microphone is partly influenced by the environment.
