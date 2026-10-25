# תוכנית Milestone 1: Walking Skeleton

מקורות: `MILESTONES.md`, `ARCHITECTURE.md`, `course-stack.md`, `tech-stack.md`, `DESIGN.md`.

## מטרה
התשתית רצה מקצה לקצה בלי פיצ'ר: דף ב-Vercel, פונקציה, Supabase, ו-n8n יומי.

## מה Claude בונה (בריפו)
- `package.json` (`"type": "module"`, תלות יחידה: `@supabase/supabase-js`).
- `.env.example` (שמות סודיים בלבד), `.claude/settings.json` (`deny` על `.env`). `.gitignore` כבר קיים.
- `migrations/001_recipes.sql`: טבלת `recipes`, RLS, `revoke`, `grant select, insert` ל-`service_role`, ו-bucket פרטי `recipe-images`.
- `data/seed.sql`: חמש שורות דוגמה (שלוש נעולות בקטגוריה `grandma`, שתיים לא נעולות). התוכן הוא דמה, לא התוכן האמיתי של העמוד.
- `lib/supabase.js`, `api/health.js` (GET, שאילתה פשוטה, מחזירה `{ ok: true }`).
- `index.html` עם `css/styles.css` ו-`js/main.js`: כותרת "Family Recipes", קריאה ל-`/api/health` והצגת הסטטוס. בלי כתובת או מפתח של Supabase בדף.
- `n8n/health-workflow.json`: workflow ליבוא (Schedule יומי + HTTP GET).

## מה נינה עושה בעצמה
1. יוצרת פרויקט Supabase, ומריצה ב-SQL Editor את `migrations/001_recipes.sql` ואז `data/seed.sql`.
2. מדביקה ב-Vercel: `SUPABASE_URL` (Config), `SUPABASE_SECRET_KEY` (Secret), ואז Redeploy.
3. מייבאת את ה-workflow ל-n8n, מעדכנת בו את הכתובת, ומריצה פעם אחת.

## בדיקות (Definition of Done)
ראו `MILESTONES.md`: כתובת חיה בטלפון, `/api/health` מחזירה `{ "ok": true }`, אין Supabase או מפתח בדף, גישה ישירה עם המפתח הציבורי נכשלת, n8n רץ, אין סוד בריפו.

## מה נבנה בפועל, החלטות ובעיות
(יעודכן בסוף הבנייה.)
