import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';
import { ProductsComponent } from './pages/products/products';
import { ServicesComponent } from './pages/services/services';
import { BlogsComponent } from './pages/blogs/blogs';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail';
import { ContactComponent } from './pages/contact/contact';
import { CartComponent } from './pages/cart/cart';
import { ProductDetailComponent } from './pages/product-detail/product-detail';
import { ProjectDetailComponent } from './pages/project-detail/project-detail';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' }
];