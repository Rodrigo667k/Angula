import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  user: User = new User
  confirmSenha:string
  tipoUsuario:string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    scroll(0,0)
  }
  confirmaSenha(event: any){
    this.confirmSenha = event.target.value
  }
  tipoUser(event: any){
      this.tipoUsuario = event.target.value
  }
  cadastrar(){
    this.user.tipo = this.tipoUsuario
    
    if(this.user.senha != this.confirmSenha ){
        alert('A senhas esta incorreta.')
    }else{
        this.authService.cadastrar(this.user).subscribe((resp:User) => {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('Usuario cadastrado com sucesso')
        })
    }console.log(this.cadastrar)

  }

}
