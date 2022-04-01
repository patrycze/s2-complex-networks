import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-network-txt-input',
  templateUrl: './network-txt-input.component.html',
  styleUrls: ['./network-txt-input.component.scss']
})
export class NetworkTxtInputComponent implements OnInit {

  @Output('data') data = new EventEmitter();

  ngOnInit(): void {
    const fileSelector = document.getElementById('btnOpen');

    fileSelector!.onclick = () => {
      openFile((txt: any) => {
        let newTxt: {source: number, target: number}[] = txt.replaceAll(',', ' ').split("\n").map((v: string) => ({source: v.split(' ').splice(0,2)[0], target: v.split(' ').splice(0,2)[1]}));
        this.data.emit(newTxt)
      });
    }
  }

}

function openFile(callBack: any){
  var element = document.createElement('input');
  element.setAttribute('type', "file");
  element.setAttribute('id', "btnOpenFile");
  element.onchange = function(){
    readText(this,callBack);
  };
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
}

function readText(filePath: any,callBack: any) {
  var reader;
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    reader = new FileReader();
  } else {
    alert('The File APIs are not fully supported by your browser. Fallback required.');
    return false;
  }
  var output = ""; //placeholder for text output
  if(filePath.files && filePath.files[0]) {
    reader.onload = function (e) {
      (output as any) = e!.target!.result;
      callBack(output);
    };//end onload()
    reader.readAsText(filePath.files[0]);
  }//end if html5 filelist support
  else { //this is where you could fallback to Java Applet, Flash or similar
    return false;
  }
  return true;
}
