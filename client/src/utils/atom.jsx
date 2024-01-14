import {atom} from 'jotai';
import { initialBooks } from './constants';

export const booksAtom = atom(initialBooks);