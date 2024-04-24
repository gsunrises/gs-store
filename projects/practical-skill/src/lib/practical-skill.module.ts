import { NgModule } from '@angular/core';
import { PracticalSkillComponent } from './practical-skill.component';
import { declarations_list } from './component';



@NgModule({
  declarations: [
    PracticalSkillComponent,
    declarations_list
  ],
  imports: [
  ],
  exports: [
    PracticalSkillComponent
  ]
})
export class PracticalSkillModule { }
