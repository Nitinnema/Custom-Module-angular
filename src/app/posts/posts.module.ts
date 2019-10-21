import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsComponent } from './posts.component';
import { MatInputModule, MatCardModule, MatToolbarModule, MatExpansionModule, MatButtonModule } from '@angular/material';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    PostsRoutingModule
  ],
  exports: [
    PostsComponent
  ],
  providers: []
})

export class PostsModule {}
