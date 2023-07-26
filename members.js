function skillMembers () {
  return {
    restrict: 'E',
    templateUrl: 'skillMembers.html',
    controller: 'skillMembersController',
    controllerAs: 'skillMembersCtrl',
    scope: {
      skill: '=',
      members: '='
    }
  }
}