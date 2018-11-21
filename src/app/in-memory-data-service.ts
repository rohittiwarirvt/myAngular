import { InMemoryDbService } from  'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb() {
      const contacts = [
       {id: 1, title: "Work Contact 1", name: "Rohit Tiwari" , phone : 8308017991, address: "Pune 1"},
       {id: 2, title: "Work Contact 2", name: "Rohit Tiwari 2" , phone : 8308017992, address: "Pune 2"},
       {id: 3, title: "Work Contact 3", name: "Rohit Tiwari 3" , phone : 8308017993, address: "Pune 3"},
       {id: 4, title: "Work Contact 4", name: "Rohit Tiwari 4" , phone : 8308017994, address: "Pune 4"},
       {id: 5, title: "Work Contact 5", name: "Rohit Tiwari 5" , phone : 8308017995, address: "Pune 5"},
       {id: 6, title: "Work Contact 6", name: "Rohit Tiwari 6" , phone : 8308017996, address: "Pune 6"},
       {id: 7, title: "Work Contact 7", name: "Rohit Tiwari 7" , phone : 8308017997, address: "Pune 7"},
       {id: 8, title: "Work Contact 8", name: "Rohit Tiwari 8" , phone : 8308017998, address: "Pune 8"},
       {id: 9, title: "Work Contact 9", name: "Rohit Tiwari 9" , phone : 8308017999, address: "Pune 9"},
       {id: 10, title: "Work Contact 10", name: "Rohit Tiwari 10" , phone : 8308017990, address: "Pune 10"}
      ];

      return {contacts};
    }
}
