import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { PresentationComponent } from './container/presentation/presentation.component';
import { SlidesService } from './services/slides.service';
import { SlideComponent } from './components/common/slide/slide.component';
import { SlideListComponent } from './components/slides/slide-list/slide-list.component';
import { SlideTitleComponent } from './components/slides/slide-title/slide-title.component';
import { SlideImageComponent } from './components/slides/slide-image/slide-image.component';
import { SlideCodeComponent } from './components/slides/slide-code/slide-code.component';
import { SlideHtmlComponent } from './components/slides/slide-html/slide-html.component';
import { AbstractSlideComponent } from './components/common/abstract-slide/abstract-slide.component';
import { SlideYoutubeComponent } from './components/slides/slide-youtube/slide-youtube.component'
import {SlideThankyouComponent} from "./components/slides/slide-thankyou/slide-thankyou.component";
import {SlideTitleComponentDemo1} from "./components/slides/specific/slide-title_with_demo1/slide-title.component";
import {FigureDragSimpleComponent} from "./figures/figure-drag-simple/figure-drag-simple.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FigureDragDropCdkComponent} from "./figures/figure-drag-drop-cdk/figure-drag-drop-cdk.component";
import {SlideTitleComponentDemo2} from "./components/slides/specific/slide-title_with_demo2/slide-title.component";
import {FigureHtmlDragDropComponent} from "./figures/figure-html-drag-drop/figure-html-drag-drop.component";
import {SlideTitleComponentDemo3} from "./components/slides/specific/slide-title_with_demo3/slide-title.component";

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: ':slideId', component: PresentationComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule
  ],
  declarations: [
    PresentationComponent,
    SlideComponent,
    SlideListComponent,
    SlideTitleComponent,
    SlideImageComponent,
    SlideCodeComponent,
    SlideHtmlComponent,
    AbstractSlideComponent,
    SlideYoutubeComponent,
    SlideThankyouComponent,
    SlideTitleComponentDemo1,
    SlideTitleComponentDemo2,
    SlideTitleComponentDemo3,
    FigureDragSimpleComponent,
    FigureDragDropCdkComponent,
    FigureHtmlDragDropComponent
  ],
  providers: [SlidesService]
})
export class PresentationModule { }
