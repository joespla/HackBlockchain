//
//  SecondViewController.swift
//  HackMxTest2
//
//  Created by Carlos Balcazar on 14/04/18.
//  Copyright © 2018 Gunter. All rights reserved.
//

import UIKit

class SecondViewController: UIViewController {

    @IBOutlet weak var nombre: UITextField!
    @IBOutlet weak var organo: UITextField!
    @IBOutlet weak var tipoDeSangre: UITextField!
    @IBOutlet weak var tiempo: UITextField!
    @IBOutlet weak var tamaño: UITextField!
    @IBOutlet weak var localizacion: UITextField!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func submit(_ sender: Any) {
        esconderTeclado()
    }
    
    func esconderTeclado (){
        nombre.resignFirstResponder()
        organo.resignFirstResponder()
        tipoDeSangre.resignFirstResponder()
        tiempo.resignFirstResponder()
        tamaño.resignFirstResponder()
        localizacion.resignFirstResponder()
    }
    
}

