import { Routes } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'stores',
        pathMatch: 'full'
    },
    {
        path: 'stores',
        component: StoreListComponent,
        title: '店舗一覧'
    },
    {
        path: 'books',
        component: BookListComponent,
        title: '書籍一覧'
    },
    {
        path: 'books/:id',
        component: BookDetailComponent,
        title: '書籍詳細'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        title: '404 page'
    },
];
