import { Routes } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { BookListComponent } from './book-list/book-list.component';

export const routes: Routes = [
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
];
