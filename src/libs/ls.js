var name_db = 'agenteOPL';

/**
 * init global db
 */
if ( localStorage.getItem( name_db ) === null ) {
  localStorage.setItem( name_db, JSON.stringify( {} ) )
}

export default {
  name_db: name_db,
  save: function( name, value ) {
    var db = JSON.parse( localStorage.getItem( name_db ) )
    if ( !db ) {
      localStorage.setItem( name_db, JSON.stringify( {} ) )
      db = JSON.parse( localStorage.getItem( name_db ) )
    }
    db[ name ] = value
    localStorage.setItem( name_db, JSON.stringify( db ) )
  },
  get: function( name ) {
    var db = JSON.parse( localStorage.getItem( name_db ) )
    return db[ name ]
  },
  clean: function( name ) {
    localStorage.setItem( name_db, JSON.stringify( {} ) )
  }
}
