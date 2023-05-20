import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{
  page = {
    title: 'Alejandro Toledo Valverde',
    subtitle: 'Development Tech Lead',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu est nec felis lacinia lobortis. Integer dapibus gravida hendrerit. Sed vitae sapien diam. Sed in neque sit amet magna porta pharetra id quis eros. Vestibulum lobortis enim ut sapien laoreet hendrerit. Morbi ultrices, purus et pretium consequat, odio mauris malesuada mauris, non maximus magna eros non enim. Nunc in aliquet tortor. Nullam vel erat mollis, vehicula sapien eu, suscipit nisl. Proin convallis leo quam, eu sodales purus sollicitudin quis. Sed eget risus suscipit, porttitor metus nec, dictum felis. Morbi in consequat nibh, a aliquam metus. Phasellus scelerisque rutrum aliquet. In eleifend vel libero sed pellentesque. Donec bibendum odio enim, in vestibulum est euismod a. Curabitur vestibulum, libero sit amet dapibus fermentum, velit dolor tempor elit, ac imperdiet ligula nisl consectetur lorem.',
    image: 'assets/mesh-bg.png',
  };
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  constructor() {}
  ngOnInit() {}
}
