import {getInput} from '@actions/core'
import * as constants from '../application-constants'

export const BRIDGE_CLI_INSTALL_DIRECTORY_KEY = getInput(constants.BRIDGE_CLI_INSTALL_DIRECTORY_KEY)?.trim() || getInput(constants.BRIDGE_INSTALL_DIRECTORY_KEY)?.trim() || ''
export const ENABLE_NETWORK_AIRGAP = getInput(constants.NETWORK_AIRGAP_KEY)?.trim() || getInput(constants.BRIDGE_NETWORK_AIRGAP_KEY)?.trim() || ''
export const BRIDGE_CLI_DOWNLOAD_URL = getInput(constants.BRIDGE_CLI_DOWNLOAD_URL_KEY)?.trim() || getInput(constants.BRIDGE_DOWNLOAD_URL_KEY)?.trim() || ''
export const BRIDGE_CLI_DOWNLOAD_VERSION = getInput(constants.BRIDGE_CLI_DOWNLOAD_VERSION_KEY)?.trim() || getInput(constants.BRIDGE_CLI_DOWNLOAD_VERSION_KEY)?.trim() || ''

// Srm related inputs
export const SRM_URL = getInput(constants.SRM_URL_KEY)?.trim() || ''
export const SRM_API_KEY = getInput(constants.SRM_API_KEY_KEY)?.trim() || ''
export const SRM_ASSESSMENT_TYPES = getInput(constants.SRM_ASSESSMENT_TYPES_KEY)?.trim() || ''
export const SRM_PROJECT_NAME = getInput(constants.SRM_PROJECT_NAME_KEY)?.trim() || ''
export const SRM_PROJECT_ID = getInput(constants.SRM_PROJECT_ID_KEY)?.trim() || ''
export const SRM_BRANCH_NAME = getInput(constants.SRM_BRANCH_NAME_KEY)?.trim() || ''
export const SRM_BRANCH_PARENT = getInput(constants.SRM_BRANCH_PARENT_KEY)?.trim() || ''
export const SRM_WAITFORSCAN = getInput(constants.SRM_WAITFORSCAN_KEY)?.trim() || ''
export const COVERITY_EXECUTION_PATH = getInput(constants.COVERITY_EXECUTION_PATH_KEY)?.trim() || ''
export const DETECT_EXECUTION_PATH = getInput(constants.DETECT_EXECUTION_PATH_KEY)?.trim() || getInput(constants.BLACKDUCK_EXECUTION_PATH_KEY)?.trim() || ''

// Polaris related inputs
export const POLARIS_ACCESS_TOKEN = getInput(constants.POLARIS_ACCESSTOKEN_KEY)?.trim() || getInput(constants.POLARIS_ACCESSTOKEN_KEY)?.trim() || ''
export const POLARIS_APPLICATION_NAME = getInput(constants.POLARIS_APPLICATION_NAME_KEY)?.trim() || ''
export const POLARIS_PROJECT_NAME = getInput(constants.POLARIS_PROJECT_NAME_KEY)?.trim() || ''
export const POLARIS_ASSESSMENT_TYPES = getInput(constants.POLARIS_ASSESSMENT_TYPES_KEY)?.trim() || ''
export const POLARIS_SERVER_URL = getInput(constants.POLARIS_SERVERURL_KEY)?.trim() || getInput(constants.POLARIS_SERVER_URL_KEY)?.trim() || ''
export const POLARIS_PRCOMMENTEDON = getInput(constants.POLARIS_PRCOMMENTEDON_KEY)?.trim() || ''

export const POLARIS_CUSTOM_HEADER = getInput(constants.POLARIS_CUSTOM_HEADER_KEY)?.trim() || ''
