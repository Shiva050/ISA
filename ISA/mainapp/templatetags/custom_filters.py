from django import template

register = template.Library()

@register.filter
def image_path(url):
    parts = url.split('/static/')
    if len(parts) == 2:
        return f"{parts[1]}"
    return url