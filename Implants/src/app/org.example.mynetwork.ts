import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.mynetwork{
   export class Hospital extends Participant {
      hospitalId: string;
      hospitalName: string;
      direction: string;
   }
   export class Organ extends Asset {
      organId: string;
      bloodType: string;
      arrivedDate: string;
      size: string;
      Location: Hospital;
   }
   export class SampleTransaction extends Transaction {
      organ: Organ;
      newHospital: Hospital;
   }
// }
