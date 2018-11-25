# -*- coding: utf-8 -*-
from odoo import http

# class tnt_snippets(http.Controller):
#     @http.route('/tnt_snippets/tnt_snippets/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/tnt_snippets/tnt_snippets/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('tnt_snippets.listing', {
#             'root': '/tnt_snippets/tnt_snippets',
#             'objects': http.request.env['tnt_snippets.tnt_snippets'].search([]),
#         })

#     @http.route('/tnt_snippets/tnt_snippets/objects/<model("tnt_snippets.tnt_snippets"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('tnt_snippets.object', {
#             'object': obj
#         })