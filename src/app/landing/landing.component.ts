import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{
  page = {
    title: 'Alejandro Toledo Valverde',
    subtitle: 'Development Tech Lead',
    content: 'Hey there! You have reached Alejandro\'s own presentation site. I am going to be adding features here in my free time. For now I am a tech lead working in the tech/finance industry. I\'ve been dealing with all the usual stuff like web app security, cloud (I\'m more into GCP lately), Java backends using microservice architecture and of course Angular frontends as you might have notice by this site. If you want to know more about me or want to get in touch check the links below!',
    image: 'assets/mesh-bg.png',
  };
  
  //Icon references
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faTwitter = faTwitter;

  constructor() {}
  ngOnInit() {}
}
