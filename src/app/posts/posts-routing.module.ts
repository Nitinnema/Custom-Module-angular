import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';

const Postsroutes: Routes = [
  { path: 'posts', component: PostsComponent, children: [
    { path: '', component: PostCreateComponent },
    { path: 'list', component: PostListComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(Postsroutes)],
  exports: [RouterModule]
})

export class PostsRoutingModule { }
