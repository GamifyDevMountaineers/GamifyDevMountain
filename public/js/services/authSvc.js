/* Authentication Service */

angular.module( 'GamifyDevMountain' )

.service( 'authSvc', function ( $state, $http ) {

  var auth = {};
  var loggedIn = false;
  var currentUserId;

  /** Get User ID */
  this.getCurrentUser = function () {
    return currentUserId;
    console.log( 'Function: getCurrentUser' );
  };
  /** Get Current User */
  this.getCurrentUserObject = function () {
    return $http.get( '/api/currentUser' )
      .then( function ( currentUser ) {
        return currentUser;
      } )
    console.log( 'Function: getCurrentUserObject' );
  };
  /** Registration */
  this.register = function ( user ) {
    return $http.post( '/api/register', user )
      .then( function ( storedUserData ) {
        console.log( 'Stored User Data', storedUserData );
        if ( storedUserData ) {
          loggedIn = true;
          // notifyObserver();
        }
        $state.go( 'main' );
        return storedUserData.data;
      } )
    console.log( 'Function: register' );
  };

  /** Log In */
  this.login = function ( user ) {
    console.log( 'Sending: ', user );
    return $http.post( '/api/login', user )
      .then( function ( userRole ) {

        currentUserId = userRole.data;
        if ( userRole === user.admin ) {
          loggedIn = true;
          // notifyObserver();
        }
        $state.go( 'admin' );

        if ( userRole === user.student ) {
          loggedIn = true;
          // notifyObserver();
        }
        $state.go( 'student' );

        if ( userRole === null ) {
          alert( 'Invalid Log In' );
        }
        $state.go( 'main' );

      } )
    console.log( 'Function: log In' );
  };

  /** Log Out */
  this.logout = function () {
    return $http.get( '/api/logout' )
      .then( function () {
        $state.go( 'main' );
      } );
    console.log( 'Function: log Out' );
  };

  // var notifyObserver;
  // this.subscribe = function (callback) {
  //     notifyObserver = callback;
  // };

} );
