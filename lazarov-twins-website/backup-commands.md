# Server Backup Commands

## If you have SSH/Terminal access to your server:

### 1. Create backup directory

```bash
mkdir -p ~/backups/ltwins-v1-$(date +%Y%m%d)
```

### 2. Backup frontend (web files)

```bash
# Backup web root
cp -r /path/to/public_html/* ~/backups/ltwins-v1-$(date +%Y%m%d)/frontend/

# Or if using specific domain folder
cp -r /var/www/yourdomain.com/* ~/backups/ltwins-v1-$(date +%Y%m%d)/frontend/
```

### 3. Backup backend (if exists)

```bash
# Backup backend application
cp -r /path/to/ltwins-backend/* ~/backups/ltwins-v1-$(date +%Y%m%d)/backend/
```

### 4. Backup database

```bash
# PostgreSQL backup
pg_dump ltwins_fitness > ~/backups/ltwins-v1-$(date +%Y%m%d)/database_backup.sql

# MySQL backup (if using MySQL instead)
mysqldump -u username -p database_name > ~/backups/ltwins-v1-$(date +%Y%m%d)/database_backup.sql
```

### 5. Create compressed archive

```bash
cd ~/backups/
tar -czf ltwins-v1-backup-$(date +%Y%m%d).tar.gz ltwins-v1-$(date +%Y%m%d)/
```
