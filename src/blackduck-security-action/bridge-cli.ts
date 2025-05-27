import { exec, ExecOptions } from '@actions/exec'
import {BRIDGE_CLI_DOWNLOAD_URL, ENABLE_NETWORK_AIR_GAP, BRIDGE_CLI_INSTALL_DIRECTORY_KEY} from './inputs'
import {debug, error, info, warning} from '@actions/core'
import {GITHUB_ENVIRONMENT_VARIABLES, NON_RETRY_HTTP_CODES, RETRY_COUNT, RETRY_DELAY_IN_MILLISECONDS, BRIDGE_CLI_DEFAULT_PATH_LINUX_UPDATED_Status, BRIDGE_CLI_DEFAULT_PATH_MAC, BRIDGE_CLI_DEFAULT_PATH_WINDOWS, MAC_PLATFORM_NAME, LINUX_PLATFORM_NAME, WINDOWS_PLATFORM_NAME} from '../application-constants'
import {tryGetExecutablePath} from '@actions/io/lib/io-util'
import path from 'path'
import {checkIfPathExists, cleanupTempDir, parseToBoolean, sleep} from './utility'
import * as inputs from './inputs'
import {DownloadFileResponse, extractZipped, getRemoteFile} from './download-utility'
import fs, {readFileSync} from 'fs'
import {validateBlackDuckInputs, validateCoverityInputs, validatePolarisInputs, validateSRMInputs, validateScanTypes} from './validators'
import {BridgeToolsParameter} from './tools-parameter'
import * as constants from '../application-constants'
import {HttpClient} from 'typed-rest-client/HttpClient'
import DomParser from 'dom-parser'
import os from 'os'
import semver from 'semver'
import {rmRF} from '@actions/io'

export class Bridge {
  bridgeExecutablePath: string
  bridgePath: string
  bridgeArtifactoryURL: string
  bridgeUrlPattern: string
  bridgeUrlLatestPattern: string
  WINDOWS_PLATFORM = 'win64'
  LINUX_PLATFORM = 'linux64'
  MAC_PLATFORM = 'macosx'
  MAC_ARM_PLATFORM = 'macos_arm'

  constructor() {
    this.bridgeExecutablePath = ''
    this.bridgePath = ''
    this.bridgeArtifactoryURL = constants.BRIDGE_CLI_ARTIFACTORY_URL
    this.bridgeUrlPattern = this.bridgeArtifactoryURL.concat('$version/bridge-cli-bundle-$version-$platform.zip')
    this.bridgeUrlLatestPattern = this.bridgeArtifactoryURL.concat('latest/bridge-cli-bundle-$platform.zip')
  }

  private getBridgeDefaultPath(): string {
    let bridgeDefaultPath = ''
    const subFolder = 'bridge-cli-bundle-'.concat(this.getOSPlatform())
    const osName = process.platform
    if (osName === MAC_PLATFORM_NAME) {
      bridgeDefaultPath = path.join(process.env['HOME'] as string, BRIDGE_CLI_DEFAULT_PATH_MAC, subFolder)
    } else if (osName === LINUX_PLATFORM_NAME) {
      bridgeDefaultPath = path.join(process.env['HOME'] as string, BRIDGE_CLI_DEFAULT_PATH_LINUX_UPDATED_Status, subFolder)
    } else if (osName === WINDOWS_PLATFORM_NAME) {
      bridgeDefaultPath = path.join(process.env['USERPROFILE'] as string, BRIDGE_CLI_DEFAULT_PATH_WINDOWS, subFolder)
    }

    return bridgeDefaultPath
  }
