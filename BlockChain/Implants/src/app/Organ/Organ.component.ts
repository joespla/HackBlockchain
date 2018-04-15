/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OrganService } from './Organ.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Organ',
	templateUrl: './Organ.component.html',
	styleUrls: ['./Organ.component.css'],
  providers: [OrganService]
})
export class OrganComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          organId = new FormControl("", Validators.required);
        
  
      
          bloodType = new FormControl("", Validators.required);
        
  
      
          arrivedDate = new FormControl("", Validators.required);
        
  
      
          size = new FormControl("", Validators.required);
        
  
      
          Location = new FormControl("", Validators.required);
        
  


  constructor(private serviceOrgan:OrganService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          organId:this.organId,
        
    
        
          bloodType:this.bloodType,
        
    
        
          arrivedDate:this.arrivedDate,
        
    
        
          size:this.size,
        
    
        
          Location:this.Location
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceOrgan.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.example.mynetwork.Organ",
      
        
          "organId":this.organId.value,
        
      
        
          "bloodType":this.bloodType.value,
        
      
        
          "arrivedDate":this.arrivedDate.value,
        
      
        
          "size":this.size.value,
        
      
        
          "Location":this.Location.value
        
      
    };

    this.myForm.setValue({
      
        
          "organId":null,
        
      
        
          "bloodType":null,
        
      
        
          "arrivedDate":null,
        
      
        
          "size":null,
        
      
        
          "Location":null
        
      
    });

    return this.serviceOrgan.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "organId":null,
        
      
        
          "bloodType":null,
        
      
        
          "arrivedDate":null,
        
      
        
          "size":null,
        
      
        
          "Location":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.example.mynetwork.Organ",
      
        
          
        
    
        
          
            "bloodType":this.bloodType.value,
          
        
    
        
          
            "arrivedDate":this.arrivedDate.value,
          
        
    
        
          
            "size":this.size.value,
          
        
    
        
          
            "Location":this.Location.value
          
        
    
    };

    return this.serviceOrgan.updateAsset(form.get("organId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceOrgan.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceOrgan.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "organId":null,
          
        
          
            "bloodType":null,
          
        
          
            "arrivedDate":null,
          
        
          
            "size":null,
          
        
          
            "Location":null 
          
        
      };



      
        if(result.organId){
          
            formObject.organId = result.organId;
          
        }else{
          formObject.organId = null;
        }
      
        if(result.bloodType){
          
            formObject.bloodType = result.bloodType;
          
        }else{
          formObject.bloodType = null;
        }
      
        if(result.arrivedDate){
          
            formObject.arrivedDate = result.arrivedDate;
          
        }else{
          formObject.arrivedDate = null;
        }
      
        if(result.size){
          
            formObject.size = result.size;
          
        }else{
          formObject.size = null;
        }
      
        if(result.Location){
          
            formObject.Location = result.Location;
          
        }else{
          formObject.Location = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "organId":null,
        
      
        
          "bloodType":null,
        
      
        
          "arrivedDate":null,
        
      
        
          "size":null,
        
      
        
          "Location":null 
        
      
      });
  }

}
