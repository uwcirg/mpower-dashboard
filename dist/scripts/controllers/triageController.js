"use strict";angular.module("mpowerDashboard").controller("TriageController",["$scope","$timeout","$http",function($scope,$timeout,$http){function compare(a,b){return a.created_at>b.created_at?-1:a.created_at<b.created_at?1:0}$scope.stories=[],$http({method:"GET",url:"https://www.pivotaltracker.com/services/v5/projects/861879/stories?with_state=unstarted"}).then(function(response){$scope.stories=response.data,$scope.stories.sort(compare),0==$scope.stories.length&&$(".dataTable_wrapper").html("<div class='text-danger'> The search result was empty. </div>")})["catch"](function(){$(".dataTable_wrapper").html("<div class='text-danger'> There was an error in the API getter. </div>")})}]);