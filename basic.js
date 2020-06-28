import { LightningElement } from 'lwc';

export default class LightningExampleAccordionBasic extends LightningElement {
    accordianSection = '';

    handleToggleSection(event) {
          if(this.accordianSection.length === 0){
            this.accordianSection =''
        }
        else{
            this.accordianSection ='Account'
        }

    }
}
