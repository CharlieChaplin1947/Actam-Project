# Start the application

1)Download the files "main_menu.html","MusicIntervals","SungSolfeggio.html" in the same folder.

2)Open "main_menu.html" on your browser.

3)Enjoy!

Alternatively you can open "MusicIntervals.html" or "SungSolfeggio.html" individually to access the
corresponding functionality.


# Actam-Project

The following project has the purpose of helping music students exercising their ear to music intervals.
In order to do so, two main functionalities are developed:

# Music Intervals

MusicIntervals has the purpose of letting the listener exercising in recognizing the notes that are played      
externally. In order to do so, the program first plays a known note and an unknown note sequentially and          
the listener has to click on the button associated to the note he thinks is corresponding to the second of the    
said notes.                                                                                                       
                                                                                                                  
MusicIntervals lets the listener repeat the interval as many times as he wants and keeps track of the number      
of consecutive intervals that he recognized. However, if the listener makes a mistake once, the score is         
resetted and he must start from the beginning.
MusicIntervals implements three difficulties, here is a brief description and visualization of each:                                                                     
                                                                                                                  
	-easy:only in the central octave of a piano and only on white keyboards. The starting note is always A.
![easy mode](https://github.com/CharlieChaplin1947/Actam-Project/blob/master/images/EasyMode.png)
                                                                                                                  
	-medium:only in the central octave of a piano, with also black keyboards. The starting note is displayed.
![medium mode](https://github.com/CharlieChaplin1947/Actam-Project/blob/master/images/MediumMode.png)

                                                                                                                  
	-hard:more octaves on a piano. The starting note is displayed. The listener has also to select an octave through the drop-down menu highlighted in red.
![hard mode](https://github.com/CharlieChaplin1947/Actam-Project/blob/master/images/HardMode.png)

                                                                                                                  
In all difficulties, except the specified exceptions, the music intervals are randomly generated.                 
                                                                                                                  
                                                                                                                  
# Sung Solfeggio

SungSolfeggioHelper has the purpose of letting the listener exercising in sung solfeggios by following          
a generated one.                                                                                                  
                                                                                                                  
The functionality randomly generates a Solfeggio in C major (more tonalities could come in the future) and        
displays it note by note on a pentagram, in a sol key. The student has to sing the note that is currently         
displayed on the pentagram, and the program will automatically inform if he must sing higher or lower             
(in pitch terms) through a line of text and a basic symbology of two arrows and a check mark. In particular, if the intonation is right, the check mark will be highlighted in green. Otherwise, the arrows will be highlighted in red in the direction of the intonation the singer must pursue (i.e. the user must sing higher, the upper arrow will be highlighted in red).

Here is a visualization of the said functionality:
	
	-The intonation is right, the check mark is hightlighted in green.
	
![right intonation](https://github.com/CharlieChaplin1947/Actam-Project/blob/master/images/Right.png)

	-The user must sing higher in pitch, the upper arrow is highlighted in red.

![higher intonation](https://github.com/CharlieChaplin1947/Actam-Project/blob/master/images/higher_intonation.png)

	-The user must sing lower in pitch, the lower arrow is highlighted in red.

![lower intonation](https://github.com/CharlieChaplin1947/Actam-Project/blob/master/images/lower_intonation.png)
                                                                                                                  
The solfeggio is made of eight randomly generated notes and gives the possibilities to repeat the solfeggio       
from the start or generate a brand new one.                                                                       
                                                                                                                  
# Notes

NOTE:SungSolfeggio is based on the microphone of your PC, remember to enable it at the start of the SungSolfeggio.
NOTE:SungSolfeggio may not be extremely accurate, some tollerance in the sung frequency is adopted since singing
an exact sinusoid is not possible by human standards, and the microphone is partly influenced by the environment.

# Video Presentation

A presentatione in form of a youtube video can be found at the link: https://youtu.be/xzyqiXNkpFU

The presentation is performed in Italian only.
