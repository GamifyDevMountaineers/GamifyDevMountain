/* Administrator */
angular.module( "GamifyDevMountain" )
  .controller( "adminCtrl", function ( $scope ) {
    $scope.adminCtrl = "adminCtrl";


    $scope.activeDir = {};
    $scope.toggleDirs = function ( selectedDir ) {
      console.log( selectedDir );
      $scope.activeDir.student = false;
      $scope.activeDir.pie = false;
      $scope.activeDir.popcorn = false;
      $scope.activeDir.popsicle = false;
      $scope.activeDir.poptart = false;
      $scope.activeDir[ selectedDir ] = true;
      console.log( $scope.activeDir );
    }


    // ####### ui-grid stuff ####### \\
    $scope.myData = [
      {
        "firstName": "Cox",
        "lastName": "Carney"
      },
      {
        "firstName": "peter",
        "lastName": "petegrew"
      },
      {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
     },
      {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
      }
    ];

    $scope.gridOptions = {
      enableSorting: true,
      columnDefs: [
        { name: 'field1', enableSorting: false },
        { name: 'field2' },
        { name: 'field3', visible: false }
      ]
    };


  } );









/* Cards */
angular.module( "GamifyDevMountain" )
  .controller( "cardCtrl", function ( $scope ) {
    $scope.adminCtrl = "cardCtrl";
  } );

/* Student */
angular.module( "GamifyDevMountain" )
  .controller( "studentCtrl", function ( $scope ) {
    $scope.adminCtrl = "studentCtrl";
  } );

/* Cohort */
angular.module( "GamifyDevMountain" )
  .controller( "cohortCtrl", function ( $scope ) {
    $scope.adminCtrl = "cohortCtrl";
  } );

/* Badge Request */
angular.module( "GamifyDevMountain" )
  .controller( "requestCtrl", function ( $scope ) {
    $scope.adminCtrl = "requestCtrl";
  } );
