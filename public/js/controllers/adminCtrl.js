/* Administrator */
angular.module( "GamifyDevMountain" )
  .controller( "adminCtrl", function ( $scope ) {
    $scope.adminCtrl = "adminCtrl";

    $scope.activeDir = {};
    $scope.toggleDirs = function ( selectedDir ) {
      console.log( selectedDir );
      $scope.activeDir.student = false;
      $scope.activeDir.badgeAdmin = false;
      $scope.activeDir.cohorts = false;
      $scope.activeDir.cardAdmin = false;
      $scope.activeDir.poptart = false;
      $scope.activeDir.hideLogo = true;
      $scope.activeDir[ selectedDir ] = true;
      console.log( $scope.activeDir );
    }


    // ########### Cards ########### \\
    $scope.cards = [{cardKeyOne: 'CSS'}, {cardKeyOne : 'JS'}, {cardKeyOne: 'HTML'}, {cardKeyOne: 'angular'}, {cardKeyOne: 'Scss'}]


    // ####### ui-grid stuff ####### \\

    $scope.selected = null;

    $scope.gridData = [];
    $scope.activeData = function(selected) {
      console.log(selected);
      $scope.gridData[selected] = 'true';
      console.log($scope.gridData);
      $scope.selected = selected;
    }

    // NOTE: There is an issue, where if the first objects within the array are smaller, than the others, the default grid view will only display the same amount of values that the first couple objects have, not the full objects'key:value pairs of the larger objects, later in the array.
    $scope.thisData = [
      // {
      //   "firstName": "Box",
      //   "lastName": "Barney"
      // },
      // {
      //   "firstName": "Sketer",
      //   "lastName": "Skeetegrew"
      // },
      {
        "firstName": "Florraine",
        "lastName": "Flise",
        "company": "Flomveyer",
        "employed": false
     },
      {
        "firstName": "Prancy",
        "lastName": "Praters",
        "company": "Pruelton",
        "employed": false
      }
    ];

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
        { name: 'field3', enableSorting: true }
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
