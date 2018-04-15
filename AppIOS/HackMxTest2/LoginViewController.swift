//
//  LoginViewController.swift
//  HackMxTest2
//
//  Created by Carlos Balcazar on 15/04/18.
//  Copyright © 2018 Gunter. All rights reserved.
//

import UIKit

class LoginViewController:

    UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    @IBOutlet weak var user: UITextField!
    @IBOutlet weak var pass: UITextField!
    

    /*@IBAction func login(_ sender: Any) {
        if((user.text == "admin")&&(pass.text == "pass")){
            let sigVista = self.storyboard?.instantiateViewController(withIdentifier: "paso") as! UITabBarController
        }
    }*/
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
