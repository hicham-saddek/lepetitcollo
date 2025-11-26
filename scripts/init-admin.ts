import { createUser } from '../lib/auth';
import { getDb, closeDb } from '../lib/db';

async function initAdmin() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Usage: pnpm init-admin <username> <password>');
    console.log('Example: pnpm init-admin admin mypassword123');
    process.exit(1);
  }

  const [username, password] = args;

  try {
    // Initialize database (will create file if it doesn't exist)
    console.log('Initializing database...');
    getDb();
    console.log('✅ Database initialized');

    console.log(`Creating admin user: ${username}...`);
    const user = await createUser(username, password);
    console.log(`✅ Admin user created successfully!`);
    console.log(`   ID: ${user.id}`);
    console.log(`   Username: ${user.username}`);
    console.log('\nYou can now login at: http://localhost:3000/admin-petit-collo/login');
  } catch (error: any) {
    if (error.message?.includes('UNIQUE constraint')) {
      console.error('❌ Error: Username already exists');
    } else {
      console.error('❌ Error:', error.message || error);
    }
    process.exit(1);
  } finally {
    closeDb();
  }
}

initAdmin();

