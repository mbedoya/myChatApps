angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) {

        $scope.$on('$ionicView.beforeEnter', function(){
            hipmob.set_context("Dash");
        });
    })

    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };

        $scope.$on('$ionicView.beforeEnter', function(){
            hipmob.show();
            hipmob.set_context("Chats");
        });
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);

        $scope.$on('$ionicView.beforeEnter', function(){
            hipmob.set_context("Chat Detail.");
        });


    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };

        $scope.$on('$ionicView.beforeEnter', function(){
            hipmob.set_context("Account");
        });
    });
