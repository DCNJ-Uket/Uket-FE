// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/buy-ticket`
  | `/home`
  | `/login`
  | `/login/:provider`
  | `/select-univ`
  | `/signup`
  | `/ticket-list`

export type Params = {
  '/login/:provider': { provider: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
