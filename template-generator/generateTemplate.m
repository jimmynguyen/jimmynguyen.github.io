% define variables
SECTION_FOLDER_PATH = '../sections';
OUTPUT_FOLDER_PATH = '../out';
JSONLAB_PATH = 'jsonlab';
OUTPUT_HTML_FILE_PATH = fullfile(OUTPUT_FOLDER_PATH, 'content.html');
OUTPUT_JS_FILE_PATH = fullfile(OUTPUT_FOLDER_PATH, 'content.js');
TAB = '    ';
TAB_2 = sprintf('%s%s', TAB, TAB);
TAB_3 = sprintf('%s%s%s', TAB, TAB, TAB);
TAB_4 = sprintf('%s%s%s%s', TAB, TAB, TAB, TAB);

% add libraries to path
addpath(JSONLAB_PATH);

% get files
file_infos = dir(SECTION_FOLDER_PATH);

% remove directories
file_infos = file_infos(~[file_infos.isdir]);

% initialize outputs
output_html = '';
output_js = '';

for file_index = 1:length(file_infos)
    % load file
    file_info = file_infos(file_index);
    file_name = fullfile(SECTION_FOLDER_PATH, file_info.name);
    file = loadjson(file_name);

    % define id template
    id = sprintf('section%d%s', file.id, file.name);

    % initialize file output html
    file_output_html = sprintf('%s<div id="%s" class="row">', TAB_4, id);

    % initialize file output js
    file_output_js = '';

    % loop through fields and add content as appropriate
    for field_index = 1:length(file.fields)
        field = file.fields{field_index};
        field_id = sprintf('%s%d', id, field_index);

        % generate field output js
        field_output_js = sprintf('%s%s: {\n%sID   : "#%s",\n%sVALUE: "%s"\n%s},\n', TAB_2, field_id, TAB_3, field_id, TAB_3, field.value, TAB_2);

        % append field output html to file output html
        file_output_html = sprintf('%s\n%s%s<div id="%s" class="col-md-%d', file_output_html, TAB_4, TAB, field_id, field.width);

        if field.offset > 0
            file_output_html = sprintf('%s col-md-offset-%d', file_output_html, field.offset);
        end

        if field.align_right
            file_output_html = sprintf('%s text-right', file_output_html);
        end

        if field.margin_top > 0
            file_output_html = sprintf('%s margin-top-%dpx', file_output_html, field.margin_top);
        end

        file_output_html = sprintf('%s"></div>', file_output_html);

        % append to file output js
        file_output_js = sprintf('%s%s', file_output_js, field_output_js);
    end

    % close file output html
    file_output_html = sprintf('%s\n%s</div><br/>\n', file_output_html, TAB_4);

    % append to output html/js
    output_html = sprintf('%s%s', output_html, file_output_html);
    output_js = sprintf('%s%s', output_js, file_output_js);
end

% write html output to file
file_handle = fopen(OUTPUT_HTML_FILE_PATH, 'w');
fprintf(file_handle, output_html(1:end-1));
fclose(file_handle);

% write js output to file
file_handle = fopen(OUTPUT_JS_FILE_PATH, 'w');
fprintf(file_handle, output_js(1:end-1));
fclose(file_handle);

% remove libraries from path
rmpath(JSONLAB_PATH);
