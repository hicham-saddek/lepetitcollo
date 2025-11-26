# Admin Dashboard - Le Petit Collo

## Configuration

L'admin dashboard est accessible uniquement via `/admin-petit-collo` (obscurité par sécurité).

## Initialisation

Pour créer le premier utilisateur administrateur :

```bash
pnpm init-admin <username> <password>
```

Exemple :
```bash
pnpm init-admin admin monmotdepasse123
```

## Accès

1. Démarrer le serveur de développement : `pnpm dev`
2. Aller sur : `http://localhost:3000/admin-petit-collo/login`
3. Se connecter avec le nom d'utilisateur et mot de passe créés

## Structure

- **Base de données** : SQLite (`data/admin.db`)
- **Authentification** : Username/Password (pas d'email)
- **Sessions** : Cookies sécurisés
- **Protection** : Middleware Next.js

## Pages disponibles

- `/admin-petit-collo` - Tableau de bord
- `/admin-petit-collo/menu` - Gestion du menu
- `/admin-petit-collo/gallery` - Gestion de la galerie
- `/admin-petit-collo/reservations` - Réservations et contacts
- `/admin-petit-collo/settings` - Paramètres

## Notes

- La base de données SQLite est créée automatiquement au premier accès
- Le fichier de base de données est dans `/data/admin.db` (ignoré par git)
- Les mots de passe sont hashés avec bcrypt

