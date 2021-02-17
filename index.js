const contacts = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const list = await contacts.listContacts();
      console.table(list);
      break;

    case "get":
      const get = await contacts.getContactById(id);
      console.table(get);
      break;

    case "add":
      const addContacts = await contacts.addContact(name, email, phone);
      console.table(addContacts);
      break;

    case "remove":
      const removeContacts = await contacts.removeContact(id);
      console.table(removeContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
