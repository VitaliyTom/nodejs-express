import {Router} from 'express';
import {loadNews} from '../controllers/loadNews.js';
import {totalCards} from '../controllers/totalCards.js';
import {popup} from '../controllers/popup.js';
import {totalCardsFilter} from '../controllers/totalCardsFilter.js';

const router = Router();

router.get('/load_news', loadNews)
router.get('/total_cards', totalCards)
router.get('/popup', popup)
router.get('/cards_filter', totalCardsFilter)

export default router;