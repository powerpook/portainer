import angular from 'angular';

import apiModule from './api';
import { HttpRequestHelperAngular } from './http-request.helper';

export default angular.module('portainer.app.services', [apiModule]).factory('HttpRequestHelper', HttpRequestHelperAngular).name;
